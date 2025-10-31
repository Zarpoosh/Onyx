// // KaolinDetail.tsx
// import { Carousel } from "react-bootstrap";

// const KaolinDetail = () => (
//   <div className="container py-5">
//     <div className="row align-items-center">
//       <div className="col-md-6">
//         <Carousel fade interval={3000}>
//           <Carousel.Item>
//             <img src="https://onyxcompany.ir/assets/moarefi02-CPLMm8M4.jpg" className="d-block w-100 rounded" />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src="/images/img4.jpg" className="d-block w-100 rounded" />
//           </Carousel.Item>
//         </Carousel>
//       </div>
//       <div className="col-md-6 text-end">
//         <h1 className="fw-bold">کائولن</h1>
//         <p>
//           شرکت اونیکس اردبیل از سال ۱۳۹۰ فعالیت خود را در زمینه تولید و عرضه انواع محصولات سرامیکی آغاز کرده است...
//         </p>
//       </div>
//     </div>
//   </div>
// );

// export default KaolinDetail;


import { Carousel } from "react-bootstrap";

const KaolinDetail = () => (
  <div className="container py-5 min-vh-100 d-flex align-items-center">
    <div className="row align-items-center text-center text-md-start w-100">
      <div className="col-md-6 mb-4 mb-md-0">
        <Carousel fade interval={3000}>
          <Carousel.Item>
            <img
              src="https://onyxcompany.ir/assets/moarefi02-CPLMm8M4.jpg"
              className="d-block w-100 rounded"
              alt="kaolin"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/img4.jpg"
              className="d-block w-100 rounded"
              alt="kaolin2"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="col-md-6 text-end">
        <h1 className="fw-bold">کائولن</h1>
        <p className="lead">
          شرکت اونیکس اردبیل از سال ۱۳۹۰ فعالیت خود را در زمینه تولید و عرضه
          انواع محصولات سرامیکی آغاز کرده است و...
        </p>
      </div>
    </div>
  </div>
);

export default KaolinDetail;
