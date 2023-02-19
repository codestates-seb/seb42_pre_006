import React from "react";
import { MdAccountBox } from "react-icons/md";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import InputFeild from "../components/UI/InputFeild";

function Guide() {
  return (
    <article className="text-left px-6">
      <header className="pb-6">
        <h1 className="text-3xl font-semibold">Guide</h1>
      </header>
      <section className="py-10 border-t">
        <header>
          <h2 className="text-2xl font-semibold">Button</h2>
        </header>
        <div className="my-4">
          <h3>- variant</h3>
          <div className="my-4 flex gap-2">
            <Button variant="primary" size="md">
              Primary
            </Button>
            <Button variant="secondary" size="md">
              Secondary
            </Button>
            <Button variant="orange" size="md">
              Orange
            </Button>
            <Button variant="danger" size="md">
              Danger
            </Button>
            <Button variant="default" size="md">
              Default
            </Button>
          </div>
          <h3>- text</h3>
          <div className="my-4 flex gap-2">
            <Button variant="primary" size="sm" text>
              Primary
            </Button>
            <Button variant="secondary" size="sm" text>
              Secondary
            </Button>
            <Button variant="orange" size="sm" text>
              Orange
            </Button>
            <Button variant="danger" size="sm" text>
              Danger
            </Button>
            <Button variant="default" size="sm" text>
              Default
            </Button>
          </div>
          <h3>- size</h3>
          <div className="my-4 flex gap-2">
            <Button variant="primary" size="lg">
              Large
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="sm">
              Small
            </Button>
          </div>
          <h3>- icon</h3>
          <div className="my-4 flex gap-2">
            <Button variant="secondary" size="sm" icon={<MdAccountBox />}>
              Icon Button
            </Button>
            <Button variant="secondary" size="sm" icon={<MdAccountBox />} />
          </div>
          <h3>- rounded</h3>
          <div className="my-4 flex gap-2 round">
            <Button variant="primary" size="sm" rounded>
              Rounded Button
            </Button>
            <Button variant="secondary" size="sm" rounded>
              Rounded Button
            </Button>
            <Button variant="orange" size="sm" rounded>
              Rounded Button
            </Button>
            <Button variant="danger" size="sm" rounded>
              Rounded Button
            </Button>
            <Button variant="default" size="sm" rounded>
              Rounded Button
            </Button>
          </div>
        </div>
      </section>
      <section className="py-10 border-t">
        <header>
          <h3 className="text-2xl font-semibold">Card</h3>
        </header>
        <div className="my-4">
          <Card>Default Card</Card>
        </div>
      </section>
      <section className="py-10 border-t">
        <header>
          <h3 className="text-2xl font-semibold">Input Feild</h3>
        </header>
        <div className="my-4">
          <InputFeild
            label="Label"
            labelDetail="Be specific and imagine you’re asking a question to another person. Minimum 15 characters."
            placeholder="placeholder"
          />
        </div>
        <div className="my-4">
          <InputFeild
            label="Label"
            labelDetail="Be specific and imagine you’re asking a question to another person. Minimum 15 characters."
            placeholder="placeholder"
            isValidError={true}
          />
        </div>
        <div className="my-4">
          <InputFeild
            label="Label"
            labelDetail="Be specific and imagine you’re asking a question to another person. Minimum 15 characters."
            placeholder="placeholder"
            disabled={true}
          />
        </div>
      </section>
    </article>
  );
}

export default Guide;