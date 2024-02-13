import styled from "styled-components/native";

export const StoreCardBox = styled.Pressable`
display: flex;
flex-direction: row;
gap:10px;
align-items: center;
width:40%;
`;

export const ProductCardBox = styled.View`
 flex-direction: row;
 gap: 10px;
 border:1px solid #e0e0e0;
 border-radius:5px;
 padding-right: 5px;
 
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

