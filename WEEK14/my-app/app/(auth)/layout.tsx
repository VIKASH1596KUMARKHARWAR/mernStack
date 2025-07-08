import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <div className="p-2 text-center border-b">
                20% off for the next 3 days
            </div>
            {children}
        </div>
    );
}


// folder name with the () will be ignored by the routes yet will carrries the layout