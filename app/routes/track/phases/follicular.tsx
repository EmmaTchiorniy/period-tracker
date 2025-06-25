import BackButton from "~/shared/buttons/back-button";
import "./phases.scss";

export default function Follicular() {
  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/track"}></BackButton>
      <h4 className="mb-0" style={{ textAlign: "center" }}>
        <b>Follicular Phase</b>
      </h4>
      <p className="pt-5 text-sm text-justify">
        This phase begins on the day you get your period and ends at ovulation
        (it overlaps with the menses phase and ends when you ovulate). During
        this time, the level of the hormone estrogen rises, which causes the
        lining of your uterus (the endometrium) to grow and thicken. In
        addition, another hormone —{" "}
        <a
          target="_blank"
          href="https://my.clevelandclinic.org/health/articles/24638-follicle-stimulating-hormone-fsh"
        >
          follicle-stimulating hormone (FSH)
        </a>{" "}
        — causes follicles in your ovaries to grow. During days 10 to 14, one of
        the developing follicles will form a fully mature egg (ovum).
      </p>
      <p className="text-sm text-gray-400">Source: Cleveland Clinics</p>
    </div>
  );
}
