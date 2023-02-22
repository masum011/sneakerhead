import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector,useDispatch } from "react-redux";
import {addToCard} from "../../features/cardSlice";

 function ProductCard() {
  const items = useSelector((state) => state.allcard.items);
  const dispat= useDispatch();
  return (
    <MDBContainer>
      <MDBRow className="mb-3">
        {items.map((item) => {
            // console.log("hii",item.title)
          return (
            <MDBCol size={3} key={item.id}>
              <MDBCard>
                <MDBCardImage src={item.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                    {item.price}
                  </MDBCardText>
                  <MDBBtn onClick={()=>dispat(addToCard(item))} href="#">add to card</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}

export default ProductCard;