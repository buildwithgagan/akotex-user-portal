
import { useState } from "react";
import { File, FileText, FileImage, FilePlus, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/sonner";

const DocumentsPage = () => {
  const [activeTab, setActiveTab] = useState("all-documents");
  
  const documentCategories = [
    { id: "all-documents", name: "All Documents", icon: FileText },
    { id: "statements", name: "Statements", icon: File },
    { id: "contracts", name: "Contracts", icon: FileText },
    { id: "reports", name: "Reports", icon: FileImage }
  ];
  
  // Mock data for documents
  const documents = [
    { id: 1, name: "Q1 Investment Statement", category: "statements", date: "2025-03-15", type: "PDF", size: "1.2 MB" },
    { id: 2, name: "Q2 Investment Statement", category: "statements", date: "2025-06-15", type: "PDF", size: "1.4 MB" },
    { id: 3, name: "Investment Agreement", category: "contracts", date: "2025-01-10", type: "PDF", size: "2.1 MB" },
    { id: 4, name: "Portfolio Performance Report", category: "reports", date: "2025-04-22", type: "PDF", size: "3.5 MB" },
    { id: 5, name: "Tax Document 2024", category: "statements", date: "2025-01-31", type: "PDF", size: "0.8 MB" },
    { id: 6, name: "Account Terms Update", category: "contracts", date: "2025-02-18", type: "PDF", size: "1.1 MB" },
  ];

  // Filter documents based on active tab
  const filteredDocuments = activeTab === "all-documents" 
    ? documents 
    : documents.filter(doc => doc.category === activeTab);

  const handleDownload = (documentName: string) => {
    toast.success(`Downloading ${documentName}...`);
    // In a real app, here we would trigger the actual download
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
        <p className="text-muted-foreground">
          Access and manage your investment documents and statements
        </p>
      </div>

      {/* Quick Actions Card */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FilePlus className="h-5 w-5 text-purple-500" />
              Upload New Document
            </CardTitle>
            <CardDescription>Add a document to your account</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full bg-white border border-purple-200 text-purple-700 hover:bg-purple-50">
              Select File to Upload
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              Request Document
            </CardTitle>
            <CardDescription>Request a specific document</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full bg-white border border-blue-200 text-blue-700 hover:bg-blue-50">
              Make Request
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <File className="h-5 w-5 text-green-500" />
              Document Settings
            </CardTitle>
            <CardDescription>Manage document preferences</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full bg-white border border-green-200 text-green-700 hover:bg-green-50">
              View Settings
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Document Tabs and Table */}
      <Tabs 
        defaultValue="all-documents" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <div className="bg-white rounded-lg p-1 shadow-sm border">
          <TabsList className="w-full grid grid-cols-4">
            {documentCategories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {documentCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{category.name}</CardTitle>
                <CardDescription>
                  {activeTab === "all-documents" 
                    ? "All your investment documents" 
                    : `Your ${category.name.toLowerCase()} and related files`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDocuments.length > 0 ? (
                      filteredDocuments.map((document) => (
                        <TableRow key={document.id}>
                          <TableCell className="font-medium">{document.name}</TableCell>
                          <TableCell>{document.date}</TableCell>
                          <TableCell>{document.type}</TableCell>
                          <TableCell>{document.size}</TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost" 
                              size="sm"
                              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                              onClick={() => handleDownload(document.name)}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                          No documents found in this category.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default DocumentsPage;
