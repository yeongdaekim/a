const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const data = [
    // 여기에 영등포구 데이터를 추가하세요.
    { id: 1, name: '영등포구',  },
    { id: 2, name: '동작구', },
];

app.get('/api/data', (req, res) => {
    res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
