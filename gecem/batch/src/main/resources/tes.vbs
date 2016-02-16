Set fso = CreateObject("Scripting.FileSystemObject")
Set xl  = CreateObject("Excel.Application")
xl.Visible = False
 xl.DisplayAlerts = False
 xl.AlertBeforeOverwriting = False
Dim oShell : Set oShell = CreateObject("WScript.Shell")
For Each f In fso.GetFolder("Z:\LEO PHARMA\MIKADO\Reporting\test").Files
  If LCase(fso.GetExtensionName(f.Name)) = "xlsm" Then
    Set wb = xl.Workbooks.Open(f.Path)
    wb.RefreshAll
      WScript.Sleep(5000)
    wb.Save
    wb.Close
  End If

Next


xl.Quit
oShell.Run "C:/Windows/System32/taskkill /F /IM EXCEL.exe",0,False