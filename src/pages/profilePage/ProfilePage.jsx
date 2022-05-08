import SampleImage from "../../assets/images.jpg";
import "./css/profilePageStyles.css";

export default function ProfilePage({ profile }) {
  return (
    <main className="profile-page-main --has-padding">
      <div className="profile-container --verticle-flex --has-padding">
        <section className=" profile-section --verticle-flex">
          <div className="avatar-container">
            <img src={SampleImage} alt="Nothing" />
          </div>
          <p>Harry Dan</p>
          <p>THis is me</p>
        </section>
        <section className="profile-section --verticle-flex">
          <p className="profile-section-heading">Social media</p>
          <input
            className="input"
            name="discord-id"
            placeholder="iHarry#8013"
          />
          <input
            className="input"
            name="instagram-id"
            placeholder="something_something"
          />
        </section>
        <section className="profile-section --verticle-flex">
          <p className="profile-section-heading">Playlists</p>
          <input className="input" name="playlist" />
          <input className="input" name="playlist" />
        </section>
        <button className="btn --primary-btn">Update</button>
      </div>
    </main>
  );
}
