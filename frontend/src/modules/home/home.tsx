import { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation, useHistory } from "react-router-dom";
import Logo from "@/assets/images/logo-devlinks-small.svg";
import LinkIcon from "@/components/Icons/icon-link";
import ProfileIcon from "@/components/Icons/icon-profile";
import "./home.scss";
import { homeURL, linksURL, profileDetailsURL } from "@/data/routes";
import Button from "@/components/Button/Button";
import MobileMockup from "@/components/Mobile-Mock/mobile";
import Card from "@/components/Card/Card";
const Home = () => {
  const [selectedTab, setSelectedTab] = useState("links");
  const location = useLocation();
  const history = useHistory();
  const tabs = [
    {
      name: "links",
      Icon: LinkIcon,
      path: linksURL,
    },
    {
      name: "profile-details",
      Icon: ProfileIcon,
      path: profileDetailsURL,
    },
  ];
  useEffect(() => {
    const path = location.pathname.split("/")[2];
    if (path) {
      history.push(`${homeURL}/${path}`);
      setSelectedTab(path);
    } else {
      history.push(linksURL);
    }
  }, []);
  return (
    <main className="home">
      <nav>
        <div className="logo-div" onClick={() => history.push("/")}>
          <img src={Logo} alt="logo" id="logo" />
          <h1>DevTree</h1>
        </div>
        <div className="tabs">
          {tabs.map((tab) => (
            <Link
              to={tab.path}
              key={tab.name}
              className={`${tab.name === selectedTab ? "active" : ""}`}
              onClick={() => setSelectedTab(tab.name)}
            >
              <tab.Icon />
              <span>
                {tab.name.charAt(0).toUpperCase() +
                  tab.name.slice(1).replace("-", " ")}
              </span>
            </Link>
          ))}
        </div>
        <Button variant="secondary">Preview</Button>
      </nav>
      <Switch>
        <Route path={linksURL}>
          <section className="main-section">
            <MobileMockup />
            <Card className="links-generator">
              <h1>Customize your links</h1>
              <p className="sub-msg">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
              <Button variant="secondary">+ Add new link</Button>
            </Card>
          </section>
        </Route>
        <Route path={profileDetailsURL}>
          <div>Profile Details</div>
        </Route>
      </Switch>
    </main>
  );
};

export default Home;
