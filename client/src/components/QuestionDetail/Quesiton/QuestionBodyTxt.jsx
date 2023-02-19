const QuestionBodyTxt = () => {
  return (
    <>
      <div className=" text-left">
        {`I was going through some MySql (mariadb) report looking for why I was getting too many rows in a report and found that the column being queried which stores serialized php and matches another column value is falsely matching.

where m.section = SUBSTRING_INDEX(SUBSTRING_INDEX(s.other,CHAR(59),2),CHAR(58),-1)

This is fine. m.section contains a number. s.other might have a value a:1:{s:3:"foo";i:4;}, so it is matching the 4 in that data.

Then I found that some n.other records are storing null. Php's serialize outputs a capital N followed by a semicolon to represent a null.`}
      </div>
    </>
  );
};

export default QuestionBodyTxt;
