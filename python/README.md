# Python Code Review Challenge

Please review the "count_records_in_bounds" function in the code_review.py file. Pretend that a junior engineer 
just sent this over in a pull request. There are some obvious and not so obvious bugs, performance issues, etc in 
the code. What suggestions would you make to the junior engineer?

The fake_data_setup.py file is available to give you a sample dataset to execute if you want to run it locally. Note: 
The "count_records_in_bounds" function is expected to be run on a csv with 10_000_000 records.

The requirements.txt should provide all libraries necessary to run this code locally.

The goal of this function is to get the following info out of the csv file:
* Total number of positions within the bounds
* Category with the most positions within the bounds
* Category with the least positions within the bounds