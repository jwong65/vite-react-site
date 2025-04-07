import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import contactImage from "../assets/contact_photo1.png"
import companyLogo from "../assets/companyLogoBlack.svg"
import { Form, Input, Button, Select, Row, Col, Checkbox } from 'antd';

import "./contact.css"
import {countries} from '../utils/countries.js'

export default function Contact() {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)
  
  const onFinish = async (values) => {
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Error submitting form:', data.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };
  
  
  const resetForm = ()=>{
    form.resetFields();
    setSubmitted(false)
  }
  return (
    <div className='contact-page-wrapper'>
      <div className='contact-section-wrapper'>
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
      </div>
      {!submitted ? (
        <>
        <div className='contact-form-wrapper'>
          <div className='form-text'>
            <h1 className='form-header'>Get In Touch</h1> 
            <h3 className='form-subheader'>Have questions? Ready to supercharge your ad strategy? Fill out the form below, and our team will get back to you lightning fast.</h3>
          </div> 
        </div>
        <div className='contact-form-outer-wrapper'>
          <div className='contact-form-container'>
            <Form
              form={form}
              name='contactForm'
              onFinish={onFinish}
              layout='vertical'
              className='contact-form'
              requiredMark={false}
            >
              <Row gutter={52}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name='firstName'
                    label="First Name"
                    rules={[{required: true, message:' '}]}
                  >
                    <Input placeholder='First Name' tabIndex={1} />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label='Email'
                    rules={[{required: true, message:' '}]}
                  >
                    <Input placeholder='Email' tabIndex={3}/>
                  </Form.Item>
                  <Form.Item
                    name="country"
                    label="Country"
                    rules={[{required: true, message:' '}]}
                  >
                    <Select placeholder='Country' tabIndex={5}>
                      {countries.map(country=>(
                        <Select.Option
                          key={country.value}
                          value={country.value}
                          disabled={country.disabled}
                        >
                          {country.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="interest"
                    label="I am interested in"
                    rules={[{required: true, message:' '}]}
                  >
                    <Select placeholder="Select" tabIndex={7}>
                      <Select.Option value='publisher'>Publisher</Select.Option>
                      <Select.Option value='advertiser'>Advertiser</Select.Option>
                      <Select.Option value='other'>Other</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[{required: true, message:' '}]}
                  >
                    <Input placeholder='Last Name' tabIndex={2}/>
                  </Form.Item>
                  <Form.Item
                    name="company"
                    label="Company Name"
                    rules={[{required: true, message:' '}]}
                  >
                    <Input placeholder='Company Name' tabIndex={4} />
                  </Form.Item>
                  <Form.Item
                    name="role"
                    label="I am"
                    rules={[{required: true, message:' '}]}
                  >
                    <Select placeholder='Select' tabIndex={6}>
                      <Select.Option value='publisher'>Publisher</Select.Option>
                      <Select.Option value='advertiser'>Advertiser</Select.Option>
                      <Select.Option value='other'>Other</Select.Option>
                    </Select> 
                  </Form.Item>
                  <Form.Item
                    name="jobTitle"
                    label= "Job Title"
                    rules={[{required: true, message:' '}]}
                  >
                    <Input placeholder='Job Title' tabIndex={8}/>
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
                  tabIndex={9}
                />
              </Form.Item>
              <Form.Item>
                <Button 
                  type='primary' 
                  htmlType='submit'
                  className='contact-submit-button'
                  loading={loading}
                  >
                  Get in Touch
                </Button>
              </Form.Item>
              <Form.Item
                name='consent'
                valuePropName='checked'
              >
                <Checkbox className='contact-consent-checkbox'>
                  By checking here, you agree to receive marketing emails about our products and services. You can unsubscribe anytime via a link in the email.
                </Checkbox>
              </Form.Item>
              <div className='privacy-policy-text'>
                The information you provide will be used in accordance with the terms of our <Link to='/privacy' className='privacy-policy-link'>privacy policy</Link>.
              </div>
            </Form>
          </div>
        </div>
        </>
      ) : (
        <> 
          <div className='contact-success-wrapper'>
            <div className='contact-success-container'>
              <img src={companyLogo} alt='Company Logo' className='company-logo'/>
              <h3 className='success-header'>Got it!</h3>
              <p className='success-subheading'>Your message has been received, and our team is on it. We’ll be in touch soon—because in a world where every millisecond counts, we move fast.</p>
              <p className='success-subheading2'>In the meantime, stay ahead of the curve.</p>
              <Button
                type='primary'
                onClick={resetForm}
                className='contact-reset-button'
              >
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </>
    )}
    </div>
  )
}
