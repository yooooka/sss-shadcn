"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, KeyRound, Lock, CheckCircle } from "lucide-react";
import Link from "next/link";

type Step = "email" | "confirmation" | "newPassword" | "success";

export default function PasswordReset() {
  const [currentStep, setCurrentStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("confirmation");
  };

  const handleConfirmation = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("newPassword");
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("success");
  };
  const handleLoginRedirect = () => {
    router.push("/");
  };

  return (
    <>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            パスワードリセット
          </CardTitle>
          <CardDescription className="text-center text-sm text-gray-500">
            {currentStep === "email" && "メールアドレスを入力してください"}
            {currentStep === "confirmation" && "確認コードを入力してください"}
            {currentStep === "newPassword" &&
              "新しいパスワードを設定してください"}
            {currentStep === "success" && "パスワードの変更が完了しました"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentStep === "email" && (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  メールアドレス
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    required
                    className="w-full pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                リセットリンクを送信
              </Button>
            </form>
          )}
          {currentStep === "confirmation" && (
            <form onSubmit={handleConfirmation} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code" className="text-sm font-medium">
                  確認コード
                </Label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    id="code"
                    type="text"
                    placeholder="000000"
                    required
                    className="w-full pl-10"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                確認
              </Button>
            </form>
          )}
          {currentStep === "newPassword" && (
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="new-password" className="text-sm font-medium">
                  新しいパスワード
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    id="new-password"
                    type="password"
                    required
                    className="w-full pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="confirm-password"
                  className="text-sm font-medium"
                >
                  パスワードの確認
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    id="confirm-password"
                    type="password"
                    required
                    className="w-full pl-10"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                パスワードをリセット
              </Button>
            </form>
          )}
          {currentStep === "success" && (
            <div className="space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <Button onClick={handleLoginRedirect} className="w-full">
                ログイン画面へ
              </Button>
            </div>
          )}
        </CardContent>
        {currentStep !== "success" && (
          <CardFooter className="flex justify-center">
            <Button variant="link" asChild>
              <Link href="/">ログイン画面に戻る</Link>
            </Button>
          </CardFooter>
        )}
      </Card>
    </>
  );
}
