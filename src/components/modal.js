import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, InputNumber } from 'antd';

function Modal({ model, onFinish }) {


    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);

    };


    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [categories, setCategories] = useState("");


    const onChangeName = (e) => {
        switch (e.target.name) {
            case "productName":

                setProductName(e.target.value);
                break;
            case "price":
                setPrice(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;
            case "categories":
                setCategories(e.target.value);
                break;
            case "image":
                setImage(e.target.value);
                break;
            default:
                break;
        }

        console.log(e);
    };


    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" >
                Add  Products
            </button>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <div class="modal-content" style={{ width: '176%' }}>
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                    Add Products
                                </h5>
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Form.Item
                                    label="Product Name"
                                    name="productName"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your productName!",
                                        },
                                    ]}
                                    onChange={onChangeName}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Price"
                                    name="price"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your price!",
                                        },
                                    ]}
                                    onChange={onChangeName}
                                >
                                    <InputNumber />
                                </Form.Item>

                                <Form.Item
                                    label="Description"
                                    name="description"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your description!",
                                        },
                                    ]}
                                    onChange={onChangeName}
                                >
                                    <Input />
                                </Form.Item>



                                <Form.Item
                                    label="categories"
                                    name="categories"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your categories!",
                                        },
                                    ]}
                                    onChange={onChangeName}
                                >
                                    <Input />
                                </Form.Item>


                                <Form.Item
                                    label="Image"
                                    name="image"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your image!",
                                        },
                                    ]}
                                    onChange={onChangeName}
                                >
                                    <input type="file" />
                                </Form.Item>

                                {/* URL.createObjectURL(object) */}


                                <br></br>
                                <br></br>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <Form.Item
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{
                                            marginTop: "23px",
                                            marginRight: "50px",
                                            height: "40px",
                                        }}
                                    // data-dismiss="modal"
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Modal
