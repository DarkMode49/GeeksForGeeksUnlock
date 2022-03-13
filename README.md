# GeeksForGeeksUnlock
Anyone running into geeksforgeeks.org in search of scripts or doing anything may face a register/login popup that can be removed by clicking outside of the card.
If the click resulted in hiding the obstructing elements, the still scroll may be disabled. The extension is supposed to fix this.
The process is:
1. Every time there is a new tab or one updated/refreshed, get URL if it contained geeksforgeeks.org it continues.
2. Enable scroll
3. Remove obstructing elements

Works automatically when the load was finished. Also has a manual button for the function.
If you wanna improve this, it requires not waiting for a full load. Needs to do the job as soon as the obstructing elements appear.
