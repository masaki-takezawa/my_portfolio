import React from 'react';
import MainTitle from '../../Shared/Title/MainTitle';
import PageContainer from '../../Shared/PageContainer';
import Description from '../../Shared/Title/Description';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <PageContainer
      videoOn={true}
      videoUrl='/videos/MUVideo6.mp4'
      brightness='60%'
    >
      <MainTitle>Contact</MainTitle>
      <Description>
        <p>下記フォームよりわかる範囲でご記入ください。</p>
        <p>必須の項目は必ずご記入お願い致します。</p>
      </Description>
      <ContactForm />
    </PageContainer>
  );
};

export default Contact;
