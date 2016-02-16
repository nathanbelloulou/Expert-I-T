On Error Resume Next
Set fso = CreateObject("Scripting.FileSystemObject")
Set xl  = CreateObject("Excel.Application")
xl.Visible = False

xl.Visible = False
 xl.DisplayAlerts = False
 xl.AlertBeforeOverwriting = False
Dim oShell : Set oShell = CreateObject("WScript.Shell")

Set f = fso.GetFile(Replace(WScript.Arguments(0),"~", " ")) 

  If LCase(fso.GetExtensionName(f.Name)) = "xlsx" OR LCase(fso.GetExtensionName(f.Name)) = "xlsm" Then
    Set wb = xl.Workbooks.Open(f.Path)
  wb.RefreshAll
      WScript.Sleep(2000)
    Err.Clear
    wb.Save
    wb.Close
  End If

xl.Quit





