import React from "react";
import { PostContent } from "../lib/posts";
import { TagContent } from "../lib/tags";
import TagLink from "./TagLink";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import Link from "next/link";

type Props = {
  posts: PostContent[];
  tag: TagContent;
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function TagPostList({ posts, tag, tags, pagination }: Props) {
  return (
    <div className={"container"}>
      <h1>
        <Link href="/">All posts</Link> / <span>{tag.name}</span>
      </h1>
      <div className={"content"}>
        <div className={"posts"}>
          <ul className={"post-list"}>
            {posts.map((it, i) => (
              <li key={i}>
                <PostItem post={it} />
              </li>
            ))}
          </ul>
          <Pagination
            current={pagination.current}
            pages={pagination.pages}
            link={{
              href: () => "/posts/tags/[[...slug]]",
              as: (page) =>
                page === 1
                  ? "/posts/tags/" + tag.slug
                  : `/posts/tags/${tag.slug}/${page}`,
            }}
          />
        </div>
        <ul className={"categories"}>
          {tags.filter(tag => tag.slug !== 'pages').map((it, i) => (
            <li key={i}>
              <TagLink tag={it} />
            </li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          .container {
            margin: 0 auto;
            max-width: 1200px;
            width: 100%;
            padding: 0 1.5rem;
          }
          .content {
            display: flex;
          }
          h1 {
            margin: 0 0 2rem;
            padding: 0;
            font-weight: 100;
            font-size: 1.75rem;
            color: #9b9b9b;
          }
          h1 span {
            font-weight: bold;
            color: #222;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style: none;
          }
          .posts {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
          }
          .posts li {
            margin-bottom: 1.5rem;
          }
          .post-list {
            flex: 1 0 auto;
          }
          .categories {
            display: none;
            margin: 0;
            padding: 0;
          }
          .categories li {
            list-style: none;
          }

          @media (min-width: 769px) {
            h1 {
              font-size: 2rem;
            }
            .categories {
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
}
