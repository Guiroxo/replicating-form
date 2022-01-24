import styled from 'styled-components';

export const Container = styled.div`
  width: 640px;
  height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 8px;

  label {
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 8px;
   
  }

  textarea {
    width: 628px;
    height: 120px;
    padding: 12px;
    resize: vertical;
  }
`;