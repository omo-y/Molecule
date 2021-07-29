import styled from "styled-components";
export const UserCard = (props) => {
  return (
    <SDL>
      <img
        height={120}
        width={150}
        src="https://source.unsplash.com/73pyV0JJOmE"
        alt="画面"
      />

      <p>名前</p>
      <dl>
        <dt>メールアドレス</dt>
        <dd>111@bbb.com</dd>
        <dt>TEL</dt>
        <dd>12345678</dd>
        <dt>会社名</dt>
        <dd>真黒(株)</dd>
        <dt>webアドレス</dt>
        <dd>web: campany@bbb.com</dd>
      </dl>
    </SDL>
  );
};
const SDL = styled.dl`
text-align:left;
dt {
 float: left;
}
dd{
  padding-left: 32px;
  padding-bottom 8px;
}
`;
