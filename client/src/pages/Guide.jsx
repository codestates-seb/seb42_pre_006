import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdAccountBox } from 'react-icons/md';
import Badge from '../components/UI/Badge';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import EmptyData from '../components/UI/EmptyData';
import FormGroup from '../components/UI/Form/FormGroup';
import InputFeild from '../components/UI/Form/InputFeild';
import TextEditorFeild from '../components/UI/Form/TextEditorFeild';
import Pagination from '../components/UI/Pagination';
import Title from '../components/UI/Title';

function Guide() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitButton = data => {
    console.log(data);
  };

  const [page, setPage] = useState(1);

  const handleClickPage = pageNum => setPage(pageNum);

  return (
    <article className="text-left px-6">
      <header className="pb-6">
        <Title>Guide</Title>
      </header>
      <section className="py-10 border-t">
        <header>
          <h2 className="text-2xl font-semibold">Title</h2>
        </header>
        <div className="my-4 flex flex-wrap gap-2">
          <Title>본문 타이틀</Title>
        </div>
      </section>
      <section className="py-10 border-t">
        <header>
          <h2 className="text-2xl font-semibold">Button</h2>
        </header>
        <div className="my-4">
          <h3>- variant</h3>
          <div className="my-4 flex flex-wrap gap-2">
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
            <Button variant="default" size="md" disabled={Boolean(true)}>
              Disabled
            </Button>
          </div>
          <h3>- text</h3>
          <div className="my-4 flex flex-wrap gap-2">
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
          <div className="my-4 flex flex-wrap gap-2">
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
          <div className="my-4 flex flex-wrap gap-2">
            <Button variant="secondary" size="sm" icon={<MdAccountBox />}>
              Icon Button
            </Button>
            <Button variant="secondary" size="sm" icon={<MdAccountBox />} />
          </div>
          <h3>- rounded</h3>
          <div className="my-4 flex flex-wrap gap-2 round">
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
          <h2 className="text-2xl font-semibold">Badge</h2>
        </header>
        <div className="my-4">
          <h3>- variant </h3>
          <div className="my-4 flex flex-wrap gap-2">
            <Badge variant="default">default</Badge>
            <Badge variant="light">light</Badge>
            <Badge variant="dark">dark</Badge>
          </div>
          <div className="my-4 flex flex-wrap gap-2">
            <Badge to="/" variant="tags">
              tags
            </Badge>
            <Badge to="/" variant="tags">
              JavaScript
            </Badge>
            <Badge to="/" variant="tags">
              React
            </Badge>
            <Badge to="/" variant="tags">
              Vue
            </Badge>
          </div>
          <div className="my-4 flex flex-wrap gap-2">
            <Badge variant="votes">131</Badge>
            <Badge variant="answered">2 answered</Badge>
            <Badge variant="answered-check">2 answered</Badge>
            <Badge variant="bounty">+50</Badge>
          </div>
        </div>
      </section>
      <section className="py-10 border-t">
        <header>
          <h2 className="text-2xl font-semibold">Card</h2>
        </header>
        <div className="my-4">
          <Card>Default Card</Card>
        </div>
      </section>
      <section className="py-10 border-t">
        <header>
          <h2 className="text-2xl font-semibold">Input Feild</h2>
        </header>
        <form onSubmit={handleSubmit(handleSubmitButton)}>
          <FormGroup
            label="Display Name"
            id="displayName"
            name="displayName"
            errors={errors}
            validation={{ required: '필수 입력 항목입니다' }}
            register={register}
          >
            <InputFeild type="text" />
          </FormGroup>
          <FormGroup
            label="Display Name"
            id="displayName"
            name="displayName"
            errors={{
              displayName: {
                type: 'required',
                message: '필수 입력 항목입니다',
              },
            }} // errors={errors}
            validation={{ required: '필수 입력 항목입니다' }}
            register={register}
          >
            <InputFeild type="text" placeholder="JavaScript, React, Vue" />
          </FormGroup>
          <FormGroup
            label="Display Name"
            id="displayName"
            name="displayName"
            errors={errors}
            validation={{ required: '필수 입력 항목입니다' }}
            register={register}
          >
            <InputFeild
              type="text"
              placeholder="JavaScript, React, Vue"
              disabled={Boolean(true)}
            />
          </FormGroup>
          <FormGroup
            label="About Me"
            id="aboutMe"
            name="aboutMe"
            errors={errors}
            validation={{ required: '필수 입력 항목입니다' }}
            register={register}
            setValue={setValue}
          >
            <TextEditorFeild />
          </FormGroup>
          <FormGroup
            label="About Me"
            id="aboutMe"
            name="aboutMe"
            errors={{
              aboutMe: {
                type: 'required',
                message: '필수 입력 항목입니다',
              },
            }} // errors={errors}
            validation={{ required: '필수 입력 항목입니다' }}
            register={register}
            setValue={setValue}
          >
            <TextEditorFeild />
          </FormGroup>
          <div className="text-left">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </section>
      <section className="py-10 border-t">
        <header>
          <h2 className="text-2xl font-semibold">Pagination</h2>
        </header>
        <div className="my-4 text-center">
          <Pagination
            total={50}
            page={page}
            onClick={handleClickPage}
            limit={10}
          />
        </div>
      </section>
      <section className="py-10 border-t">
        <header>
          <h2 className="text-2xl font-semibold">Empty Data</h2>
        </header>
        <div className="my-4 text-center">
          <EmptyData />
        </div>
      </section>
    </article>
  );
}

export default Guide;
