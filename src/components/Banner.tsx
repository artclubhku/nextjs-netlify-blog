import { formatDate } from '../utils';

export default function Banner({
	heading,
	subHeading,
	lastupdate,
	createdOn,
	bannerUrl,
	mode,
}: {
	heading: string;
	subHeading: string;
	lastupdate?: string;
	createdOn?: string;
	bannerUrl: string;
	mode: string;
}) {
  return (
    <>
      {/* Page Header */}
      <header className="masthead" style={{backgroundImage: `url(${bannerUrl})`}}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                {mode === 'post' ? (
                  <div className="post-heading">
                    <h1>{heading}</h1>
                    <h2 className="subheading">{subHeading}</h2>
                    <span className="meta">Post written on {formatDate(createdOn)},  {lastupdate && "last updated on " + formatDate(lastupdate)}</span>
                  </div>
                ) : (
                  <div className="site-heading">
                    <h1>{heading}</h1>
                    <span className="subheading">{subHeading}</span>
                  </div>
                )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
