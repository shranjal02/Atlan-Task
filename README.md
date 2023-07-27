# Atlan-Task

# Project Overview:
The project is a simple web-based application built using React. It allows users to input SQL queries, view the results of dummy queries, and toggle between different predefined queries. The application doesn't have a real backend or actual data; instead, it uses mock data and dummy queries for demonstration purposes.

This project is a web-based SQL query application built using React. 

◉ When the application loads, users are presented with the heading "SQL Query Application," a textarea to input SQL queries, and buttons to select predefined queries.
◉ Users can type or paste their SQL queries into the textarea provided by the QueryInput component.
◉ Upon clicking the "Run Query" button, the handleQuerySubmit function in App.js is called, which acts as a dummy function to handle query submission. It sets dummy data (mockData) as the query result based on the input query. 
◉ Users can also click on one of the predefined query buttons (Query 1, Query 2, Query 3) from the QueryButtonsWrapper. When they do so, the handleQuerySelection function in App.js is called. This function updates the selectedQuery state and sets dummy data (mockData) as the query result based on the selected query index.
◉ The query result data is stored in the queryResults state of App.js.
◉ The QueryResults component receives the query result data as a prop and displays it in the form of a table. The table shows headers and data rows based on the received data.

This is a dummy application without a real backend or actual data. The data shown in the result table (QueryResults) is mock data, and the queries are not actually executed on any database. Instead, the application simply displays predefined dummy data based on the query submitted or selected.




