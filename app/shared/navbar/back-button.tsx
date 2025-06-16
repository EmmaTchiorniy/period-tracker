export default function BackButton(props : any) {
    return (
        <button className="text-[#FF6776] absolute" style={{fontSize: "small"}} onClick={() => location.href = props.prevHref}> 
            &lt; Back
        </button>
  );
  }