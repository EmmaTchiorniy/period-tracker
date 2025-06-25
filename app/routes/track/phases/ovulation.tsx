import BackButton from "~/shared/buttons/back-button";

export default function Ovulation() {
  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/track"}></BackButton>
      <h4 className="mb-0" style={{ textAlign: "center" }}>
        <b>Ovulation Phase</b>
      </h4>
      <p className="pt-5 text-sm text-justify">
        This phase occurs roughly at about day 14 in a 28-day menstrual cycle. A
        sudden increase in another hormone —
        <a
          target="_blank"
          href="https://my.clevelandclinic.org/health/body/22255-luteinizing-hormone"
        >
          luteinizing hormone (LH)
        </a>{" "}
        — causes your ovary to release its egg. This event is ovulation.
      </p>
      <p className="text-sm text-gray-400">Source: Cleveland Clinics</p>
    </div>
  );
}
