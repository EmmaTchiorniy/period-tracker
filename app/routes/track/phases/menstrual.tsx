import { useOutletContext } from "react-router";
import { IconState } from "~/constants/icon";
import BackButton from "~/shared/buttons/back-button";

export default function Menstrual() {
  const { setActiveIcon }: any = useOutletContext();

  setActiveIcon(IconState.Track);

  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/track"}></BackButton>
      <h4 className="mb-0" style={{ textAlign: "center" }}>
        <b>Menstrual Phase</b>
      </h4>
      <p className="pt-5 text-sm text-justify">
        The menstrual phase begins on the first day of your period. It's when
        the lining of your uterus sheds through your vagina if pregnancy hasn’t
        occurred. Most people bleed for three to five days, but a period lasting
        only three days to as many as seven days is usually not a cause for
        worry.
      </p>
      <p className="text-sm text-gray-400">Source: Cleveland Clinics</p>
    </div>
  );
}
