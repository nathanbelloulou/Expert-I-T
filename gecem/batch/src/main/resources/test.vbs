On Error Resume Next
Set fso = CreateObject("Scripting.FileSystemObject")
Set xl  = CreateObject("Excel.Application")
xl.Visible = False


 xl.AskToUpdateLinks = False
 xl.AlertBeforeOverwriting = True

  

Dim oShell : Set oShell = CreateObject("WScript.Shell")

 For Each f In fso.GetFolder(WScript.Arguments(0)).Files
 
  If LCase(fso.GetExtensionName(f.Name)) = "xlsx" Then
    Set wb = xl.Workbooks.Open(f.Path)
    wb.RefreshAll
	
	Err.Clear
    wb.Save
    wb.Close
  End If
Next


xl.Quit
oShell.Run "C:/Windows/System32/taskkill /F /IM EXCEL.exe",0,False


