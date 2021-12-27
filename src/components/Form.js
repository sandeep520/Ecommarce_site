// import React, { useState, useDispatch, useEffect } from "react";

// import 'antd/dist/antd.css';
// import { Form, Input, Button, Checkbox, InputNumber } from 'antd';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Data } from "./data";



// function ProductData({ onFinish }) {

//     // const onFinishFailed = (errorInfo) => {
//     //     console.log("Failed:", errorInfo);
//     // };

//     // const [name, setName] = useState("");
//     // const [email, setEmail] = useState("");
//     // const [password, setPassword] = useState("");

//     // const onChangeName = (e) => {
//     //     switch (e.target.name) {
//     //         case "fullName":
//     //             setName(e.target.value);
//     //             break;
//     //         case "email":
//     //             setEmail(e.target.value);
//     //             break;
//     //         case "password":
//     //             setPassword(e.target.value);
//     //             break;
//     //         default:
//     //             break;
//     //     }

//     //     console.log(e);
//     // };



//     return (
//         <div>
//             {/* <button
//                 type="button"
//                 class="btn btn-primary"
//                 data-toggle="modal"
//                 data-target="#exampleModal"
//             >
//                 Add Roster
//             </button>

//             <div
//                 class="modal fade"
//                 id="exampleModal"
//                 tabindex="-1"
//                 role="dialog"
//                 aria-labelledby="exampleModalLabel"
//                 aria-hidden="true"
//             >
//                 <div class="modal-dialog" role="document">
//                     <Form
//                         name="basic"
//                         labelCol={{
//                             span: 8,
//                         }}
//                         wrapperCol={{
//                             span: 16,
//                         }}
//                         initialValues={{
//                             remember: true,
//                         }}
//                         onFinish={onFinish}
//                         onFinishFailed={onFinishFailed}
//                         autoComplete="off"
//                     >
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h5 class="modal-title" id="exampleModalLabel">
//                                     Add Roster
//                                 </h5>
//                                 <button
//                                     type="button"
//                                     class="close"
//                                     data-dismiss="modal"
//                                     aria-label="Close"
//                                 >
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div class="modal-body">
//                                 <Form.Item
//                                     label="Full name"
//                                     name="fullName"
//                                     rules={[
//                                         {
//                                             required: true,
//                                             message: "Please input your username!",
//                                         },
//                                     ]}
//                                     onChange={onChangeName}
//                                 >
//                                     <Input />
//                                 </Form.Item>

//                                 <Form.Item
//                                     label="Email"
//                                     name="email"
//                                     rules={[
//                                         {
//                                             required: true,
//                                             message: "Please input your username!",
//                                         },
//                                     ]}
//                                     onChange={onChangeName}
//                                 >
//                                     <Input />
//                                 </Form.Item>

//                                 <Form.Item
//                                     label="Password"
//                                     name="password"
//                                     rules={[
//                                         {
//                                             required: true,
//                                             message: "Please input your password!",
//                                         },
//                                     ]}
//                                     onChange={onChangeName}
//                                 >
//                                     <Input.Password />
//                                 </Form.Item>

//                                 <br></br>
//                                 <br></br>
//                             </div>
//                             <div class="modal-footer">
//                                 <button
//                                     type="button"
//                                     class="btn btn-secondary"
//                                     data-dismiss="modal"
//                                 >
//                                     Close
//                                 </button>
//                                 <Form.Item
//                                     wrapperCol={{
//                                         offset: 8,
//                                         span: 16,
//                                     }}
//                                 >
//                                     <Button
//                                         type="primary"
//                                         htmlType="submit"
//                                         style={{
//                                             marginTop: "23px",
//                                             marginRight: "50px",
//                                             height: "40px",
//                                         }}
//                                     >
//                                         Submit
//                                     </Button>
//                                 </Form.Item>
//                             </div>
//                         </div>
//                     </Form>
                   
//                 </div>
//             </div> */}


//             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
//                 Launch demo modal
//             </button>

//             <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//                 <div class="modal-dialog modal-dialog-centered" role="document">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
//                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div class="modal-body">
//                             ...
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                             <button type="button" class="btn btn-primary">Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }
// export default ProductData


















