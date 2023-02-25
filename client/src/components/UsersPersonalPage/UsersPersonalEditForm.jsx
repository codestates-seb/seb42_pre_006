import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import FormGroup from '../UI/Form/FormGroup';
import TextEditorFeild from '../UI/Form/TextEditorFeild';
import InputFeild from '../UI/Form/InputFeild';
import validate from '../../utils/validate';

function UsersPersonalEditForm({ user }) {
  const navigate = useNavigate();
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const userDefaultValues = {
    displayName: user.displayName,
    location: user.location,
    memberTitle: user.memberTitle,
    aboutMe: user.aboutMe,
  };

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      ...userDefaultValues,
    },
  });

  const editorContent = watch('aboutMe', user.aboutMe);

  const handleChangeTextEditor = contents => {
    setValue('aboutMe', contents);
  };

  const handleSaveUserFrom = async ({
    displayName,
    location,
    memberTitle,
    aboutMe,
  }) => {
    const tagArray = memberTitle.trim().split(' ');
    const removeDuplicateTags =
      memberTitle.trim().length > 0 && [...new Set(tagArray)].join(' ');

    const formData = {
      displayName,
      location,
      aboutMe,
      memberTitle: removeDuplicateTags,
    };

    try {
      const response = await axios.patch(`api/v1/members/${user.memberId}`, {
        ...formData,
      });
      if (response && response.status === 200) {
        navigate(-1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const subscription = watch(() => {
      const isNotChangeValues =
        JSON.stringify(getValues()) === JSON.stringify(userDefaultValues);
      setSubmitDisabled(!isNotChangeValues);
    });
    return () => subscription.unsubscribe();
  }, [watch, getValues]);

  return (
    <form onSubmit={handleSubmit(handleSaveUserFrom)}>
      <FormGroup
        label="Display Name"
        id="displayName"
        name="displayName"
        errors={errors}
        validation={validate.displayName}
        register={register}
      >
        <InputFeild type="text" />
      </FormGroup>
      <FormGroup
        label="Location"
        id="location"
        name="location"
        errors={errors}
        validation={{ required: 'Location을 입력해주세요' }}
        register={register}
      >
        <InputFeild type="text" placeholder="Seoul, Koera" />
      </FormGroup>
      <FormGroup
        label="Tags"
        id="memberTitle"
        name="memberTitle"
        errors={errors}
        validation={validate.tag}
        register={register}
      >
        <InputFeild type="text" placeholder="e.g. (wpf ios jquery)" />
      </FormGroup>
      <FormGroup
        label="About Me"
        id="aboutMe"
        name="aboutMe"
        errors={errors}
        validation={{
          required: 'About Me를 입력해주세요',
          minLength: {
            value: 20,
            message: '20자 이상 작성해주세요',
          },
        }}
        register={register}
        setValue={setValue}
      >
        <TextEditorFeild
          value={editorContent}
          onChange={handleChangeTextEditor}
        />
      </FormGroup>
      <div className="text-left">
        <Button
          variant="primary"
          type="submit"
          // disabled={!submitDisabled || Object.keys(errors).length > 0}
        >
          Save profile
        </Button>
        <Button variant="primary" text to={`/users/${user.memberId}`}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default UsersPersonalEditForm;
