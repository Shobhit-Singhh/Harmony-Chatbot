import React, { useState, useRef, useEffect } from 'react';

function App() {
    const [sidebarWidth, setSidebarWidth] = useState(300);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(null);
    const dragStartWidth = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragStartX.current = e.clientX;
        dragStartWidth.current = sidebarWidth;
        document.body.style.cursor = 'ew-resize';
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                const newWidth = dragStartWidth.current + (e.clientX - dragStartX.current);
                if (newWidth > 200 && newWidth < 500) {
                    setSidebarWidth(newWidth);
                }
            }
        };

        const handleMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
                document.body.style.cursor = 'default';
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className="bg-white shadow-lg overflow-y-auto relative"
                style={{ width: "min(100%, max(250px, 30%))", minWidth: "200px", maxWidth: "400px" }}
            >
                <div className="p-4">
                    <h1 className="text-xl font-bold text-purple-700 mb-4">Mental Health Screening Assistant</h1>
                    <div className="mb-6">
                        <h2 className="text-md font-semibold text-gray-700 mb-2">Role & Responsibilities</h2>
                        <p className="text-sm text-gray-600 mb-1">• Empathetic mental health screening</p>
                        <p className="text-sm text-gray-600 mb-1">• Attentive listening and guidance</p>
                        <p className="text-sm text-gray-600 mb-1">• Structured assessment</p>
                        <p className="text-sm text-gray-600">• Professional recommendations</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-md font-semibold text-gray-700 mb-2">Key Commands</h2>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-mono bg-gray-100 px-1">» Report</span> - Get screening summary</p>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-mono bg-gray-100 px-1">» Mode [type]</span> - Change therapy mode</p>
                        <p className="text-sm text-gray-600"><span className="font-mono bg-gray-100 px-1">• CBT</span></p>
                        <p className="text-sm text-gray-600"><span className="font-mono bg-gray-100 px-1">• Humanistic</span></p>
                        <p className="text-sm text-gray-600"><span className="font-mono bg-gray-100 px-1">• Psychodynamic</span></p>
                        <p className="text-sm text-gray-600"><span className="font-mono bg-gray-100 px-1">• Hybrid</span></p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-md font-semibold text-gray-700 mb-2">Crisis Support</h2>
                        <p className="text-sm text-gray-600 mb-1">🇺🇸 USA: <strong>988</strong> (Crisis Lifeline)</p>
                        <p className="text-sm text-gray-600 mb-1">🇬🇧 UK: <strong>116 123</strong> (Samaritans)</p>
                        <p className="text-sm text-gray-600 mb-1">🇨🇦 Canada: <strong>988</strong></p>
                        <p className="text-sm text-gray-600">🇦🇺 Australia: <strong>13 11 14</strong> (Lifeline)</p>
                    </div>

                    <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-xs text-gray-600 italic">
                            This is a screening tool only and not a clinical diagnosis.
                            Always consult with a qualified mental health professional.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <div className="flex-1 relative">
                    <iframe
                        src="https://www.chatbase.co/chatbot-iframe/iikDjITDKlk2BXRqOFFhs"
                        width="100%"
                        height="105%"
                        allow="clipboard-write; microphone; camera"
                        className="absolute top-0 left-0 w-full z-10"
                    ></iframe>
                </div>
                {/* Footer to hide watermark */}
                <div className="h-10 bg-white border-t border-gray-200 flex items-center justify-center z-50">
                    <p className="text-xs text-gray-500">
                        Mental Health Screening Assistant | Confidential Support
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;