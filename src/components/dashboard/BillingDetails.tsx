
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BillingDetails = () => {
  const [billingInfo, setBillingInfo] = useState({
    fullName: "John Doe",
    companyName: "Acme Inc",
    email: "john@example.com",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States"
  });
  
  const [isEditing, setIsEditing] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setBillingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the updated billing info to an API
    toast.success("Billing details updated successfully");
    setIsEditing(false);
  };

  return (
    <Card className="overflow-hidden border">
      <CardHeader className="bg-gray-50 border-b">
        <CardTitle>Billing Details</CardTitle>
        <CardDescription className="text-gray-600">
          Update your billing information used for invoices and receipts
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={billingInfo.fullName}
                onChange={handleChange}
                disabled={!isEditing}
                className={`border-input ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">Company Name (Optional)</Label>
              <Input
                id="companyName"
                name="companyName"
                value={billingInfo.companyName}
                onChange={handleChange}
                disabled={!isEditing}
                className={`border-input ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={billingInfo.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`border-input ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-medium text-gray-700">Street Address</Label>
            <Input
              id="address"
              name="address"
              value={billingInfo.address}
              onChange={handleChange}
              disabled={!isEditing}
              className={`border-input ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium text-gray-700">City</Label>
              <Input
                id="city"
                name="city"
                value={billingInfo.city}
                onChange={handleChange}
                disabled={!isEditing}
                className={`border-input ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state" className="text-sm font-medium text-gray-700">State / Province</Label>
              <Input
                id="state"
                name="state"
                value={billingInfo.state}
                onChange={handleChange}
                disabled={!isEditing}
                className={`border-input ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode" className="text-sm font-medium text-gray-700">ZIP / Postal Code</Label>
              <Input
                id="zipCode"
                name="zipCode"
                value={billingInfo.zipCode}
                onChange={handleChange}
                disabled={!isEditing}
                className={`border-input ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-sm font-medium text-gray-700">Country</Label>
            <Select
              disabled={!isEditing}
              value={billingInfo.country}
              onValueChange={(value) => handleSelectChange("country", value)}
            >
              <SelectTrigger id="country" className={`w-full ${isEditing ? 'bg-white' : 'bg-gray-50'} border-input`}>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
                <SelectItem value="Germany">Germany</SelectItem>
                <SelectItem value="France">France</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between border-t py-4 bg-gray-50">
        {isEditing ? (
          <>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              onClick={handleSubmit}
              className="bg-primary hover:bg-primary/90"
            >
              Save Changes
            </Button>
          </>
        ) : (
          <>
            <div />
            <Button 
              onClick={() => setIsEditing(true)}
              className="bg-primary hover:bg-primary/90"
            >
              Edit Details
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default BillingDetails;
