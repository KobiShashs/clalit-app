import "./Map.css";

function Map(): JSX.Element {
    return (
        <div className="Map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1690.595489226302!2d34.785583421704864!3d32.06408295359917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b70c925e5ed%3A0x9e629a46351e04c3!2sJohn%20Bryce%20Training!5e0!3m2!1sen!2sil!4v1677570405230!5m2!1sen!2sil"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>
        </div>
    );
}

export default Map;
