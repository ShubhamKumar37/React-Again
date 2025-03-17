import React, { useState, useRef, useEffect, createRef } from "react";
// import { getLinkPreview } from 'link-preview-js';
import "./Chat.css";
// import user from '../assets/images/user.png';
// import image from '../assets/images/image.png';
import Layout from "../../Layout";
import {
  BsArrowUpCircle,
  BsArrowUpCircleFill,
  BsPaperclip,
} from "react-icons/bs";
import { FaAngleDown, FaChevronDown, FaEdit } from "react-icons/fa";
import { TbNotebook } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";

export const msgs = [
  {
    id: 1,
    sender: "John",
    text: "Hello there!",
    image:
      "https://s3-alpha-sig.figma.com/img/b8eb/4dda/6b0a61bf9f4adca8502d091138504179?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LZ9djmgjGoyLwoON2MVhjNNZImfYix-h-dVDThQ0sWo3HdBDheW8CaqdfHyNekc7fB3y0~znPsIoyoU6nFOx63asQ6~8VNuFmL6uc9E8yX~y9UJRTjTh0IqRa1rrRGmXid4Rl~PUgfYwOCbHz5UgQeWqEkxJuENPR3xI8NRqJCG0hvWijw9bs7ETKSsOlPSadEaKkdhDZ-I~By4JRfEDkz-oq6DZwHh9DpM8h-Badio0f6ecz82JtsUqeO58sXf87H4G8oH5NMHH7lyNfUkvIHq35zQOwqYtp5iT7BEGMUQI52yMtqkl7UlE8wOl5IyD0X343KrgBXoZ2Jm-W~bk2w__",
  },
  {
    id: 2,
    sender: "Jane",
    text: "Hi John!",
    image:
      "https://s3-alpha-sig.figma.com/img/9bda/31b7/4e857b1f1208e23fd327ef4951c38510?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fr-xHzzkqcMVFN9jOLJ3X58JqAhk0~5SeiIqsTgxbxVzLrnwS~P-iZJXRI0UeJOZYcmVCaNL8iBRRFj~xU0MC9tY2yHyljNQO9js41bzcgbUYHv8P~pRjPTyo6QQqZYcgxBlbgznD7BS7qaHkGFhnjpKVqAKhp35Cs4PGdiwUuHPwQDOdUjbvRWiLB4aMcEzGyHlW4RCCz3480yIeOUGQtkEbKn4IRA6BF0UkQPy9-JTe1AVh7tiqY8OgsSqO8SN~n~31D8vmgcUn9u5RqFMpxSb1fN12KUgGmJIFnChQhWVqHmFL~TVp8jT0WDia02MlTrWERpFkkWGA78k6lxlJQ__",
  },
  {
    id: 3,
    sender: "You",
    text: "Hello",
    image:
      "https://s3-alpha-sig.figma.com/img/f0aa/eb5f/ffb1ed4b0fadc3f9f7c516826b3665e6?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KF43QkyWsmqBZVS4y9N4dFgiYrc4S9mB4OyGylLx4U214P-VQkwI0ELISFPeSUUCM40OmFBCD9AM9r6qqdhx9Y1x6k~LFQNxDzAvqjjtFKZ9z0i57n5zzwVWIOXxh~PwBdWedjU0sYDLPbgg7md2K716Vu6L-scJYkyRMdRbyV9GzHhVNDAgqM6NVwqcGD2UjsYUnpRfx0JqF2CDobTulBi6tXwltQTgIaa7fiKat-U970swbDqsAi1579dSQnhxxbg-CF8cmIFGNXvpsGmTj8YQLvwgBPMwH9mbbGyXAW1Ud55QOXil~woM6Rvb2bH3cjiyAKH3-PfeCRuiEktMbA__",
  },
  {
    id: 2,
    sender: "Jane",
    text: "Hi John!",
    image:
      "https://s3-alpha-sig.figma.com/img/e80e/adb8/f6f372b2b97f69592f7184e75b8f8547?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ci1RZSDZ-sKuWMgEzkAHRkd5D9Ol7z0c5JFLMyvyGkOyTezuRE2vAAxcfgm4wCf1bzoeXYXd6JLoVBboamDg43d286T4S7jEC1UowL-czUMFIqP-jYoZ3~nYNN8vDT6YPBkqH-0~-f9AHkbYMz2hFFCYPVyARoWnhsoyRDxdUC1rasK07PkiAGnTpNWEPMqyntd~3SSV-Pty74N4xgytnXKMgfn70dt0GyBW7DvbHUhJLC8Wryzxgt-DQJfanszESAu9xgG9gChdggljBnaIoet5xQ-rxJmla1J7HCEk56Wy2bbV-LCvlNs-XB0Mg3qmM7kt8YbmzTa93iRnox6jCA__",
  },
  {
    id: 3,
    sender: "You",
    text: "Hello",
    image:
      "https://s3-alpha-sig.figma.com/img/f0aa/eb5f/ffb1ed4b0fadc3f9f7c516826b3665e6?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KF43QkyWsmqBZVS4y9N4dFgiYrc4S9mB4OyGylLx4U214P-VQkwI0ELISFPeSUUCM40OmFBCD9AM9r6qqdhx9Y1x6k~LFQNxDzAvqjjtFKZ9z0i57n5zzwVWIOXxh~PwBdWedjU0sYDLPbgg7md2K716Vu6L-scJYkyRMdRbyV9GzHhVNDAgqM6NVwqcGD2UjsYUnpRfx0JqF2CDobTulBi6tXwltQTgIaa7fiKat-U970swbDqsAi1579dSQnhxxbg-CF8cmIFGNXvpsGmTj8YQLvwgBPMwH9mbbGyXAW1Ud55QOXil~woM6Rvb2bH3cjiyAKH3-PfeCRuiEktMbA__",
  },
  {
    id: 2,
    sender: "Jane",
    text: "Hi John!",
    image:
      "https://s3-alpha-sig.figma.com/img/e80e/adb8/f6f372b2b97f69592f7184e75b8f8547?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ci1RZSDZ-sKuWMgEzkAHRkd5D9Ol7z0c5JFLMyvyGkOyTezuRE2vAAxcfgm4wCf1bzoeXYXd6JLoVBboamDg43d286T4S7jEC1UowL-czUMFIqP-jYoZ3~nYNN8vDT6YPBkqH-0~-f9AHkbYMz2hFFCYPVyARoWnhsoyRDxdUC1rasK07PkiAGnTpNWEPMqyntd~3SSV-Pty74N4xgytnXKMgfn70dt0GyBW7DvbHUhJLC8Wryzxgt-DQJfanszESAu9xgG9gChdggljBnaIoet5xQ-rxJmla1J7HCEk56Wy2bbV-LCvlNs-XB0Mg3qmM7kt8YbmzTa93iRnox6jCA__",
  },
  {
    id: 3,
    sender: "You",
    text: "Hello",
    image:
      "https://s3-alpha-sig.figma.com/img/f0aa/eb5f/ffb1ed4b0fadc3f9f7c516826b3665e6?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KF43QkyWsmqBZVS4y9N4dFgiYrc4S9mB4OyGylLx4U214P-VQkwI0ELISFPeSUUCM40OmFBCD9AM9r6qqdhx9Y1x6k~LFQNxDzAvqjjtFKZ9z0i57n5zzwVWIOXxh~PwBdWedjU0sYDLPbgg7md2K716Vu6L-scJYkyRMdRbyV9GzHhVNDAgqM6NVwqcGD2UjsYUnpRfx0JqF2CDobTulBi6tXwltQTgIaa7fiKat-U970swbDqsAi1579dSQnhxxbg-CF8cmIFGNXvpsGmTj8YQLvwgBPMwH9mbbGyXAW1Ud55QOXil~woM6Rvb2bH3cjiyAKH3-PfeCRuiEktMbA__",
  },
];

const Chat = () => {
  const [showList, setShowList] = useState(true);

  const handleNotebook = () => {
    setShowList(!showList);
  };

  return (
    <Layout>
      <div className='flex flex-row items-start justify-between overflow-y-hidden'>
        <ChatList notebookClick={handleNotebook} showList={showList} />
        <Chats notebookClick={handleNotebook} showList={showList} />
      </div>
    </Layout>
  );
};

const ChatList = (props) => {
  return (
    <div
      className={`${props.showList === false ? "w-0" : "w-full md:w-[30%]"} flex h-[85vh] flex-col items-center bg-white`}
    >
      {" "}
      {/* added 'h-full' and 'overflow-y-auto' */}
      <div className='mt-2 flex h-[70px] w-full flex-row items-center justify-between bg-white pl-2 pr-2'>
        <div onClick={props.notebookClick}>
          <TbNotebook className='h-[30px] w-[30px] text-black' />
        </div>
        <FiEdit className='h-[25px] w-[25px]' />
      </div>
      <div
        className={`flex w-full flex-col items-center overflow-y-auto bg-white`}
        style={{ overflow: "scroll", scrollbarWidth: "none" }}
      >
        <div className='mt-8 flex h-[45px] w-[95%] flex-row items-center justify-center rounded-[5px] border p-1'>
          <img
            src={require("../../Assets/images/search.png")}
            className='ml-2 mr-2 h-[16px] w-[16px] text-[#CDCED0]'
          />
          <input
            className='w-full text-start text-[14px]'
            type='text'
            placeholder='Search'
          />
        </div>
        {msgs.map((item) => (
          <div
            key={item.id}
            className='flex w-full flex-row items-start justify-between p-4'
          >
            <img src={item?.image} className='h-[40px] w-[40px] rounded-full' />
            <div className='ml-0 flex w-[65%] flex-col items-start'>
              <span className='text-[16px] text-[Gilroy-SemiBold] text-[black]'>
                {item.sender}
              </span>
              <span className='text-[12px] text-[#717171] text-[Gilroy-Medium]'>
                {item.text}
              </span>
            </div>
            <span className='text-[12px] text-[#717171] text-[Gilroy-Medium]'>
              2:00 PM
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Chats = (props) => {
  const [messages, setMessages] = useState(msgs);

  const [newMessage, setNewMessage] = useState("");

  const textInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    // if (newMessage.trim() !== '') {
    //     const isLink = newMessage.match(/\bhttps?:\/\/\S+/gi);
    //     if (isLink) {
    //         try {
    //             const linkInfo = await getLinkPreview(isLink[0]);
    //             setMessages(prevMessages => [
    //                 ...prevMessages,
    //                 { id: prevMessages.length + 1, sender: 'You', text: newMessage, linkPreview: linkInfo },
    //             ]);
    //         } catch (error) {
    //             console.error('Error fetching link preview:', error);
    //         }
    //     } else {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, sender: "You", text: newMessage },
    ]);
    // }

    setNewMessage("");
    // }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 1, sender: "You", image: reader.result },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className={`flex flex-col bg-[#DBD9D940] ${props.showList === true ? "w-0 md:w-[70%]" : "w-full"} h-[85vh] overflow-hidden`}
      style={{ scrollbarWidth: "none" }}
    >
      <div className='top-border'>
        <div className='flex flex-row items-center'>
          {props.showList === false && (
            <div onClick={props.notebookClick}>
              <TbNotebook className='h-[30px] w-[30px] text-black' />
            </div>
          )}
          <h6 className='pl-4 text-[20px] text-[Gilroy-SemiBold] text-[black]'>
            Dr. Jii
          </h6>
          <FaChevronDown className='ml-4 h-[16px] w-[16px]' />
        </div>
        <img
          src='https://s3-alpha-sig.figma.com/img/03e9/2b4f/f73ec9eb092879865b46bbaf7e98854d?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VoYexUAGy5zw37l~NU6sU0Sd9u6nSo3NCyZwV5cCUGlda~qqgMjgnpDFGqZ6JWrfpOQuxfWRWvzJMg3OBDFgqO0A~3bpm7Fi6ZJ1AYUmp1QykwledEx2CFZmuOz5wB6qWb6VzYwL9Bd47Xvmt2M8pCpLxZ5jRHItZkXbM6uIOmb02zsY0hS2nmNGtB7U6mXS6JL5dRT8oEmegohwVwWtXs2eApE0cfgZjsJQ-s-RLrR~v0ITP9Qu8VDzsRmIe952UE5PniKtDPF8HHOSBAogkCxHekD7NSFsiOBEgV0sTLu7Lcx1kAIW24-D0OaNra0~ZpkEsWt1kAQcejgmcFY3tw__'
          className='h-[40px] w-[40px] rounded-full'
        />
      </div>
      <div className='message-container' style={{ scrollbarWidth: "none" }}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === "You" ? "sent-message" : "received-message"}`}
          >
            {/* {message.image && (
                            <img src={message.image} alt="Uploaded" className="uploaded-image" />
                        )} */}
            <p className='message-sender'>{message.sender}</p>
            <p className='message-text text-[14px] text-[Gilroy-Medium]'>
              {message.text}
            </p>
            <div className='flex w-full flex-row items-center justify-end'>
              <span className='mr-8 text-[10px]'>12:15 pm</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className='rouned-full flex w-full flex-row items-center justify-center border'>
        <div className='mb-8 flex w-[80%] flex-row items-center rounded-full bg-white p-2'>
          <BsPaperclip className='h-[25px] w-[25px] text-black' />
          <div onClick={() => fileInputRef.current.click()}>
            {/* <img src={image} height={30} width={30} onResize="contain"/> */}
          </div>
          <input
            ref={textInputRef}
            className='input'
            placeholder='Type a message...'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <input
            type='file'
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <BsArrowUpCircleFill className='h-[25px] w-[25px] text-[#A3A3A3]' />
          {/* <button className="send-button" onClick={sendMessage}>Send</button> */}
        </div>
      </div>
    </div>
  );
};

export default Chat;
