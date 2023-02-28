import "./Page404.css";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
            <h2>PAGE NOT FOUND</h2>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NUYvbT6vTPs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default Page404;
