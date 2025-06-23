import BackButton from "~/shared/buttons/back-button";
import { useState } from "react";
import { Colour } from "~/constants/colour";
import { Form } from "react-bootstrap";
import { useOutletContext } from "react-router";

export default function Help() {
  const [valid, setValid] = useState(false);

  const { name }: any = useOutletContext();

  const [validated, setValidated] = useState(false);

  const [tempName, setTempName] = useState(name);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      setValid(true);
      form.reset();
      setValidated(false);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="pt-16 px-8 relative items-center">
        <BackButton prevHref={"/account"}></BackButton>
        <div className="w-initial flex justify-center">
          <div className="w-max flex flex-col justify-between self-center">
            <h3 className="mb-0" style={{ textAlign: "center" }}>
              <b>Help</b>
            </h3>
            <div className="flex flex-row justify-between pt-5">
              <p className="mr-16 mb-0 text-sm self-center">Name</p>
              <Form.Group controlId="validationCustomName">
                <Form.Control
                  required
                  size="sm"
                  type="name"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  style={{
                    width: "160px",
                    overflow: "hidden",
                    resize: "none",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#F5F5F5",
                    paddingLeft: "16px",
                  }}
                />
              </Form.Group>
            </div>
            <div className="flex flex-row justify-between pt-4">
              <p className="mb-0 mr-17 text-sm self-center">Email</p>
              <Form.Group controlId="validationCustomEmail">
                <Form.Control
                  required
                  size="sm"
                  type="email"
                  placeholder="example@email.com"
                  style={{
                    width: "max-content",
                    overflow: "hidden",
                    resize: "none",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#F5F5F5",
                    paddingLeft: "16px",
                  }}
                />
              </Form.Group>
            </div>
            <div className="flex flex-column justify-start pt-10">
              <p className="mb-3 mr-17 text-sm self-start">Your Question</p>
              <Form.Group controlId="validationCustomQuestion">
                <Form.Control
                  required
                  size="sm"
                  type="text"
                  as="textarea"
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    resize: "none",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#F5F5F5",
                    paddingLeft: "16px",
                  }}
                />
                <Form.Label
                  className="text-sm text-center mt-3 w-full"
                  style={{
                    visibility: valid ? "visible" : "hidden",
                    color: Colour.DarkPink,
                  }}
                >
                  Submission was successful!
                </Form.Label>
              </Form.Group>
            </div>
            <button
              type="submit"
              className="text-white p-2 mt-4"
              style={{
                backgroundColor: Colour.Orange,
                borderRadius: "10px",
                height: "auto",
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
}
