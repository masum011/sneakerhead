import {React,useState} from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { addToCard } from "../../features/cardSlice";
import Footer from "./Footer";
import './server.scss';

// import { rent } from "./rentComponent";
// import RentComponent from "./RentComponent";

function ProductCard() {
  const [openRent,setOpentRent]=useState(false);
  const items = useSelector((state) => state.allcard.items);
  const dispat = useDispatch();
  function selectDay() {
    console.log('click me')
  }
  return (
    <>
      <MDBContainer>
        <MDBRow className="mb-3 ">
          {items.map((item) => {
            // console.log("hii",item.title)
            return (
              <MDBCol className="maincontaner" size={3} key={item.id}>
                <MDBCard>
                  <div class="hover-zoom">
                    <MDBCardImage src={item.img} position="top" alt="..." />
                  </div>
                  <MDBCardBody className="cardBody">
                    <MDBCardTitle className="title-font">
                      {item.title}
                    </MDBCardTitle>
                    <MDBCardText>{item.price}</MDBCardText>
                    <MDBBtn onClick={() => dispat(addToCard(item))} href="#">
                      Buy
                    </MDBBtn>
                    <MDBBtn className="btn-danger" onClick={()=>{
                      setOpentRent(!openRent)
                    }}>
                      Rent
                      
                    </MDBBtn>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
          {openRent&& <div className="rentContaner">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                        </div>}
        </MDBRow>
        
      </MDBContainer>
      <Footer />
    </>
  );
}




export default ProductCard;
