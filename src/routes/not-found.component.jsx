import "./not-found.scss";
import { RiEmotionSadLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
import Button from "../ui/button";

const NotFound = () => {
  const prefixClass = "not-found";
  const navigate = useNavigate();

  return (
    <section className={prefixClass}>
      <div className="container text-center">
        <RiEmotionSadLine size={100} />
        <h2>Oops.. Page not found!</h2>
        <p>Sorry, The page you're looking for doesn't exist.</p>
        <Button
          type="button"
          onClick={() => navigate(routes.index)}
          color="light"
          className="hover_animation"
          isSticky={false}
        >
          Go Back
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
