import {test} from "@playwright/test";

test("To create the lead",async({page})=>
{
    //load url
    await page.goto("https://leaftaps.com/opentaps/control/main");
    //enter username an password

    //Locator 1 : getbyrole() - based on position,based on index,based on name (from accessbility tree)

    //1.based on position
    /*await page.getByRole("textbox").first().fill("Demosalesmanager");
    await page.getByRole("textbox").last().fill("crmsfa");*/

    //2.based on index -but its not reliable if index got changed
   /* await page.getByRole("textbox").nth(0).fill("Demosalesmanager");
    await page.getByRole("textbox").nth(1).fill("crmsfa"); */

    //3.to overcome index,use name from accessibility tree

   /* await page.getByRole("textbox",{name:"Username"}).fill("demosalesmanager");
    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");

    await page.waitForTimeout(5000);
    await page.getByRole("button").click();*/

    //2.getbyLabel() - only use for textbox
    await page.getByLabel("Username").fill("Demosalesmanager");
    await page.getByLabel("Password").fill("crmsfa");
    await page.getByRole("button").click();

    //3.getbytext() - used for links
    await page.getByText("CRM/SFA").click();
    await page.getByText("Leads",{exact:true}).click();
    await page.getByText("Create Lead",{exact:true}).click();

//CSS Selectors
    //Enter company name
    await page.locator("#createLeadForm_companyName").fill("RM Industries");
    await page.locator("#createLeadForm_firstName").fill("Rama");
    await page.locator("#createLeadForm_lastName").fill("Seetha");
    //Salutation
    await page.locator("#createLeadForm_personalTitle").fill("Ms");
    //Title
    await page.locator("#createLeadForm_generalProfTitle").fill("Mr");
    //Annual Revenue
    await page.locator("#createLeadForm_annualRevenue").fill("2500000");
    //Department
    await page.locator("#createLeadForm_departmentName").fill("services");
    //Phone number
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("25958077");
    //Create Lead
    await page.getByRole("button",{name:"Create Lead"}).click();
    await page.waitForTimeout(5000);

}
);