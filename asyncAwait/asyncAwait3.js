import { Examples } from "./exampleFunctions.js";

async function migrateUserProfile() {
  try {
    const profileBannerResponse = await Examples.uploadProfileBanner();
    const profileBannerResponse = await Examples.uploadProfilePicture();
    // ..
  } catch (err) {
    console.log("opps something went wrong migrating the user!");
  }
}

async function migrateUserProfileFaster() {
  try {
    const results = await Promise.all([
      Examples.uploadProfileBanner(),
      Examples.uploadProfilePicture(),
    ]);
    // ..
  } catch (err) {
    console.log("opps something went wrong migrating the user!");
  }
}

async function coolName() {
  try {
    const resp = await networkCall();
    const savedData = await saveData(resp);
    // handle saveData response
  } catch (err) {
    console.log("one catch block to rule them all! 💍");
  }
}
