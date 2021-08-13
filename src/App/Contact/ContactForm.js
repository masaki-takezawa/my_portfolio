import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';
import { CssVariables } from '../../Common/CssVariables';
import Button from '../../Shared/Button';

const ContactForm = () => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    //再読み込みさせない
    e.preventDefault();

    //各要素を確認

    window.confirm(
      `以下の内容で送信します。宜しければOKをクリックしてください。\n
      会社名:${company}\n
      名前:${name}\n
      メールアドレス:${email}\n
      メッセージ:${text}\n`
    )
      ? alert(`お問い合わせありがとうございます。メッセージを送信しました。`)
      : alert(`メッセージの送信をキャンセルしました。`);

    //各変数を初期化
    setCompany('');
    setName('');
    setEmail('');
    setText('');
  };

  return (
    <LyContactForm onSubmit={(e) => handleSubmit(e)}>
      <BlWrap>
        <BlInput
          type='text'
          placeholder='会社名'
          onChange={(e) => setCompany(e.target.value)}
        />
        <BlInput
          type='text'
          placeholder='名前（必須）'
          onChange={(e) => setName(e.target.value)}
        />
        <BlInput
          type='email'
          placeholder='メールアドレス（必須）'
          onChange={(e) => setEmail(e.target.value)}
        />
        <BlTextarea
          placeholder='メッセージを入力'
          onChange={(e) => setText(e.target.value)}
        ></BlTextarea>
        <Button type='submit' btnOutline={true}>
          送信
        </Button>
      </BlWrap>
    </LyContactForm>
  );
};

export default ContactForm;

const LyContactForm = styled.form`
  max-width: 960px;
  width: 40%;
  margin-top: 30px;
  overflow: hidden;

  @media ${Breakpoints.tab} {
    width: 50%;
  }

  @media ${Breakpoints.sp} {
    width: 70%;
  }
`;

//コンテンツをcenter表示
const BlWrap = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

//formの要素のCss
const FormCss = css`
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: rgba(${CssVariables.mainColorRgb}, 0.2);
  color: ${CssVariables.mainColor};
  border: 1px solid ${CssVariables.mainColor};
  font-size: 1rem;
  line-height: 2;

  &::placeholder {
    color: rgba(${CssVariables.mainColorRgb}, 0.5);
    padding-left: 0.5rem;
  }

  //フォーム選択時、枠線を変更
  &:focus {
    border: 2px solid ${CssVariables.accentOrange};
    outline: 0;
  }
`;

const BlInput = styled.input`
  ${FormCss}

  @media ${Breakpoints.tab} {
    line-height: 1.5;
  }
`;

const BlTextarea = styled.textarea`
  ${FormCss}
  height: 12rem;

  @media ${Breakpoints.tab} {
    line-height: 1.5;
    height: 6rem;
  }
`;
