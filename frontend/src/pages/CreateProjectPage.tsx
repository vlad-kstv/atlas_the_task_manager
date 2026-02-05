import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateProjectPage() {

    const onSubmit = () => {

    }

    return (
        <>
        <div className="flex flex-col ml-5 mt-5 gap-4 w-100">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                New project:
            </h3>
            <Input placeholder="Enter project name" />
            <Input placeholder="Enter description" />
            
            <Button variant="outline" size="lg" className="cursor-pointer">
                Submit
            </Button>
        </div>
        </>    
    )
}