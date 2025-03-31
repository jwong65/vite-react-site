import React , {useState} from 'react'
import contactImage from "../assets/contact_photo1.png"
import { Form, Input, Button, Select, Result, Row, Col, message } from 'antd';

import "./contact.css"

export default function Contact() {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);
  
  const onFinish= (values) =>{
    console.log('Form Values:', values)
    setSubmitted(true)
  }
  
  const resetForm = ()=>{
    form.resetFields();
    setSubmitted(false)
  }
  return (
    <div className='contact-page-wrapper'>
      <div className='contact-container'>
        <img src={contactImage} className='contact-background-image' />
        <div className='contact-text-overlay'>
          <h1 className='contact-main-heading'>
            Supercharge Your Growth
          </h1>
          <h3 className='contact-sub-heading'>
            Let's Talk
          </h3>
          <h3 className='contact-sub-heading2'>
            Whether you're a publisher looking to maximize revenue or an advertiser seeking premium inventory, Thunder Monetize is here to deliver results. Reach out and let’s make every millisecond count.
          </h3>
        </div>
      </div>
      <div className='contact-form-wrapper'>
        <div className='form-text'>
          <h1 className='form-header'>Get In Touch</h1> 
          <h3 className='form-subheader'>Have questions? Ready to supercharge your ad strategy? Fill out the form below, and our team will get back to you lightning fast.</h3>
        </div> 
      </div>
      {!submitted ? (
        <div className='contact-form-outer-wrapper'>
          <div className='contact-form-container'>
            <Form
              form={form}
              name='contactForm'
              onFinish={onFinish}
              layout='vertical'
              className='contact-form'
            >
              <Row gutter={52}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name='firstName'
                    label="First Name"
                  >
                    <Input placeholder='First Name' />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label='Email'
                  >
                    <Input placeholder='Email' />
                  </Form.Item>
                  <Form.Item
                    name="country"
                    label="Country"
                  >
                    <Select placeholder='Country'>
                      <Option value='us'>United States</Option>
                      <Option value='ca'>Canada</Option>
                      <Option value='other'>Other</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="interest"
                    label="I am interested in"
                  >
                    <Select placeholder="Select">
                      <Option value='publisher'>Publisher</Option>
                      <Option value='advertiser'>Advertiser</Option>
                      <Option value='other'>Other</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                  >
                    <Input placeholder='Last Name' />
                  </Form.Item>
                  <Form.Item
                    name="company"
                    label="Company Name"
                  >
                    <Input placeholder='Company Name' />
                  </Form.Item>
                  <Form.Item
                    name="role"
                    label="I am"
                  >
                    <Select placeholder='Select'>
                      <Option value='publisher'>Publisher</Option>
                      <Option value='advertiser'>Advertiser</Option>
                      <Option value='other'>Other</Option>
                    </Select> 
                  </Form.Item>
                  <Form.Item
                    name="jobTitle"
                    label= "Job Title"
                  >
                    <Input placeholder='Job Title' />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name='message'
                label={<span>
                  Anything else you'd like to tell us?
                  <span className='optional-label'>
                    (optional)
                  </span>
                  </span>}   
              >
                <Input.TextArea 
                  rows={4}
                  placeholder='Let Us Know'
                  showCount
                  maxLength={100} 
                  className="contact-message-textarea"
                />
              </Form.Item>
              <Form.Item>
                <Button 
                  type='primary' 
                  htmlType='submit'
                  className='contact-submit-button'
                  >
                  Get in Touch
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      ):(<>No form</>)}
      Contact
    </div>
  )
}
