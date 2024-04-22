import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import React from "react";

export default function Page() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
            </div>
            <div className="rounded-lg border border-dashed shadow-sm">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="max-w-md rounded-lg border"
                >
                    <ResizablePanel defaultSize={50}>
                        <div className="flex h-[200px] items-center justify-center p-6">
                            <span className="font-semibold">One</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle/>
                    <ResizablePanel defaultSize={50}>
                        <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={25}>
                                <div className="flex h-full items-center justify-center p-6">
                                    <span className="font-semibold">Two</span>
                                </div>
                            </ResizablePanel>
                            <ResizableHandle/>
                            <ResizablePanel defaultSize={75}>
                                <div className="flex h-full items-center justify-center p-6">
                                    <span className="font-semibold">Three</span>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </main>
    );
}
