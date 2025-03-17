import React from "react";
import { Button } from "../ui/Button.tsx";
import { Input } from "./../ui/Input.tsx";
import { Card, CardContent } from "./../ui/Card.tsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./../ui/Tabs.tsx";
import { Label } from "./../ui/Label.tsx";
// import Icons from "../icons";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl mx-auto p-8">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="flex justify-center border-b">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="generate-id">Generate ID</TabsTrigger>
          </TabsList>
          <Card className="mt-6 p-8 shadow-lg w-full">
            <CardContent className="flex flex-col gap-6">
              <div className="flex justify-center gap-6">
                <Button variant="outline" className="flex-1">
                  {/* <Icons.user className="mr-2" />  */}
                  Healthcare Professional ID/Username
                </Button>
                <Button variant="outline" className="flex-1">
                  {/* <Icons.phone className="mr-2" />  */}
                  Mobile Number
                </Button>
              </div>
              <div>
                <Label>Registered Mobile Number</Label>
                <div className="flex items-center gap-2">
                  <span className="border px-3 py-2 rounded-md bg-gray-100">+91</span>
                  <Input type="text" placeholder="Enter mobile number" className="flex-1" />
                </div>
              </div>
              <div>
                <Label>Captcha</Label>
                <div className="flex items-center gap-2">
                  <span className="border px-4 py-2 rounded-md bg-gray-100">4 - 3 = ?</span>
                  <Input type="text" placeholder="Answer" className="w-20" />
                  <Button variant="outline">
                    {/* <Icons.refresh /> */}
                  </Button>
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" className="w-1/3">Cancel</Button>
                <Button className="w-1/3">Login</Button>
              </div>
              <p className="text-center text-sm">
                Do not have an account? <a href="#" className="text-blue-600">Register Here</a>
              </p>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
