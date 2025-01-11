import React, { useState } from "react";

const AdminMessage = () => {
  const [activeChat, setActiveChat] = useState(null);

  const messages = [
    {
      id: 1,
      name: "Joshua Smith",
      preview: "Hi there! I'm looking for work...",
      status: "Student at Norwood Secondary College",
      isOpen: false,
    },
    {
      id: 2,
      name: "William McNeil",
      preview: "Absolutely! Let me know a time.",
      status: "Student at Swinburne University",
      isOpen: false,
    },
    {
      id: 3,
      name: "Connor Grant",
      preview: "Can we discuss this further?",
      status: "Student at Koonung Secondary College",
      isOpen: false,
    },
  ];

  const chatHistory = [
    { sender: "Joshua Smith", text: "Hi there! I'm looking for work.", time: "2m ago" },
    { sender: "Benny Coffee House", text: "Okay fantastic! Would you like to come for an interview?", time: "1m ago" },
  ];

  const openChat = (id) => {
    setActiveChat(id);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/3 bg-white border-r border-gray-300">
        <div className="p-4 text-xl font-bold text-gray-700 border-b">Messenger</div>
        <div className="overflow-y-auto h-[calc(100vh-64px)]">
          {messages.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 flex items-center cursor-pointer ${
                activeChat === chat.id ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              onClick={() => openChat(chat.id)}
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div
                  className={`font-medium ${
                    activeChat === chat.id ? "text-gray-600" : "text-black font-bold"
                  }`}
                >
                  {chat.name}
                </div>
                <div className="text-sm text-gray-500 truncate">{chat.preview}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-2/3 flex flex-col">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-white border-b border-gray-300 flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div className="font-medium text-lg">{messages.find((m) => m.id === activeChat)?.name}</div>
                <div className="text-sm text-gray-500">
                  {messages.find((m) => m.id === activeChat)?.status}
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
              {chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "Benny Coffee House" ? "justify-end" : "justify-start"
                  } mb-4`}
                >
                  <div
                    className={`${
                      message.sender === "Benny Coffee House"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-black"
                    } px-4 py-2 rounded-lg max-w-xs`}
                  >
                    {message.text}
                  </div>
                  <div className="text-xs text-gray-400 pl-2">{message.time}</div>
                </div>
              ))}
            </div>

            {/* Chat Footer */}
            <div className="p-4 bg-white border-t border-gray-300 flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
              />
              <button className="ml-3 bg-red-500 text-white px-4 py-2 rounded-lg">Send</button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start messaging.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessage;
