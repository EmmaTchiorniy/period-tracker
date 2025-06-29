import { useOutletContext } from "react-router";
import { IconState } from "~/constants/icon";
import BackButton from "~/shared/buttons/back-button";

export default function Luteal() {
  const { setActiveIcon }: any = useOutletContext();

  setActiveIcon(IconState.Track);

  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/track"}></BackButton>
      <h4 className="mb-0" style={{ textAlign: "center" }}>
        <b>Luteal Phase</b>
      </h4>
      <p className="text-sm pt-5 text-justify">
        This phase lasts from about day 15 to day 28. Your egg leaves your ovary
        and begins to travel through your fallopian tubes to your uterus. The
        level of the hormone progesterone rises to help prepare your uterine
        lining for pregnancy. If the egg becomes fertilized by sperm and
        attaches itself to your uterine wall (implantation), you become
        pregnant. If pregnancy doesn’t occur, estrogen and progesterone levels
        drop and the thick lining of your uterus sheds during your period.
      </p>
      <p className="text-sm text-gray-400">Source: Cleveland Clinics</p>
    </div>
  );
}
