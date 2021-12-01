import config from "../../config.json";

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: { keyword: string }[];
  readonly site_author: string;
  readonly posts_per_page: number;
  readonly twitter_account: string;
  readonly github_account: string;
  readonly instagram_account: string;
};

export default config as Config;
