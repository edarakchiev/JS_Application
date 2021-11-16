const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const mochData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0":{
        "author":"J.K.Rowling",
        "title":"Harry Potter and the Philosopher's Stone"
    },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1":{
        "author":"Svetlin Nakov",
        "title":"C# Fundamentals"
}
};

function json(data){
    return {
        status:200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'ContentType': 'application/json',
        },
    
        body: JSON.stringify(data)
    }
}

describe('Tests', async function() {
    this.timeout (5000);

    let page, browser;

    before(async () => {
        browser = await chromium.launch();
    });
    
    after(async () => {
        page = await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async ()=>{
        await page.close();
    });

    it('loads and display all books', async () => {
        await page.route('**/jsonstore/collections/books*', (route) => {
            route.fulfill(json(mochData));
        });
        await page.goto('http://localhost:5500/Book-Library/');
        await page.click('text=Load All Books');
        await page.waitForSelector('text=Harry Potter');
        const rows = await page.$$eval('tr', (rows) => rows.map(r => r.textContent.trim()));
        
        expect(rows[1]).to.contains('Harry Potter');
        expect(rows[1]).to.contains('Rowling');
        expect(rows[2]).to.contains('C# Fundamentals');
        expect(rows[2]).to.contains('Nakov');
    });
});