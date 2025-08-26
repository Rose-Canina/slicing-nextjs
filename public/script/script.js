fetch("/public/data/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("DATA:", data); // cek isi data

    // menu
    const menu = document.getElementById("menu");

    if (data.menu) {
      data.menu.map((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = item;
        a.href = "#";
        li.appendChild(a);
        menu.appendChild(li);
      });
    } else {
      console.error("data.menu tidak ditemukan!");
    }

    // getText
    if (data.getText) {
      const content = document.getElementById("getText");
      content.innerHTML = data.getText.join("");
    }

    // // featuresText
    if (data.featuresText) {
      const feature = document.getElementById("featuresText");

      // Title
      const title = document.createElement("h2");
      title.textContent = data.featuresText.title;
      feature.appendChild(title);

      // Description
      const desc = document.createElement("p");
      desc.textContent = data.featuresText.desc;
      feature.appendChild(desc);

      // List
      const ul = document.createElement("ul");
      data.featuresText.list.forEach((item) => {
        const li = document.createElement("li");

        // Image
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = "checklist icon";
        img.style.width = "20px";
        img.style.height = "20px";
        img.style.marginRight = "10px";

        // Text
        const span = document.createElement("span");
        span.textContent = item.text;

        li.appendChild(img);
        li.appendChild(span);
        ul.appendChild(li);
      });
      feature.appendChild(ul);
    }

    // plansSection
    if (data.plans) {
      const plansSection = document.getElementById("plans");

      const title = document.createElement("h2");
      title.textContent = data.plans.title;
      plansSection.appendChild(title);

      const desc = document.createElement("p");
      desc.textContent = data.plans.desc;
      plansSection.appendChild(desc);

      const container = document.createElement("div");
      container.style.display = "flex";
      container.style.gap = "20px";

      data.plans.list.forEach((plan) => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.padding = "20px";
        card.style.borderRadius = "10px";
        card.style.width = "200px";

        const img = document.createElement("img");
        img.src = plan.img;
        img.alt = plan.name;
        img.style.width = "50px";
        card.appendChild(img);

        const name = document.createElement("h3");
        name.textContent = plan.name;
        card.appendChild(name);

        const ul = document.createElement("ul");
        plan.features.forEach((f) => {
          const li = document.createElement("li");

          const fImg = document.createElement("img");
          fImg.src = f.img;
          fImg.alt = "check";
          fImg.style.width = "15px";
          fImg.style.marginRight = "8px";

          const span = document.createElement("span");
          span.textContent = f.text;

          li.appendChild(fImg);
          li.appendChild(span);
          ul.appendChild(li);
        });
        card.appendChild(ul);

        const price = document.createElement("p");
        price.textContent = plan.price;
        card.appendChild(price);

        container.appendChild(card);
      });

      plansSection.appendChild(container);
    }

    // Network Section
    if (data.network) {
      const network = document.getElementById("networkText");

      // Title
      const title = document.createElement("h2");
      title.textContent = data.network.title;
      network.appendChild(title);

      // Description
      const desc = document.createElement("p");
      desc.textContent = data.network.desc;
      network.appendChild(desc);
    }

    // testimonialText
    if (data.testimonialText) {
      const testimonialText = document.getElementById("testimonialText");
      testimonialText.innerHTML = data.testimonialText.join("");
    }

    // subscribeText
    if (data.subscribeText) {
      const subscribeText = document.getElementById("subscribeText");
      subscribeText.innerHTML = data.subscribeText.join("");
    }

    // plan
    // planText
    if (data.planText) {
      const planText = document.getElementById("planText");
      planText.innerHTML = data.planText.join("");
    }

    // // plancard
    // if (data.planCard) {
    //   const plansSection = document.getElementById("plans");

    //   // Buat container utama
    //   const container = document.createElement("div");
    //   container.className = "plan-prices"; // sesuai permintaan
    //   container.style.display = "flex";
    //   container.style.gap = "20px";
    //   container.style.flexWrap = "wrap";

    //   data.planCard.forEach((plan) => {
    //     const card = document.createElement("div");
    //     card.className = "plan";
    //     card.style.border = "1px solid #ccc";
    //     card.style.padding = "20px";
    //     card.style.borderRadius = "10px";
    //     card.style.width = "220px";
    //     card.style.textAlign = "center";

    //     // Image
    //     const img = document.createElement("img");
    //     img.src = plan.image;
    //     img.alt = plan.name;
    //     img.style.width = "50px";
    //     card.appendChild(img);

    //     // Name
    //     const name = document.createElement("h3");
    //     name.textContent = plan.name;
    //     card.appendChild(name);

    //     // Features
    //     const ul = document.createElement("ul");
    //     ul.className = "plan-features";
    //     plan.features.forEach((feature) => {
    //       const li = document.createElement("li");

    //       const fImg = document.createElement("img");
    //       fImg.src = "../img/correct.png"; // icon checklist
    //       fImg.alt = "Correct";
    //       fImg.style.width = "15px";
    //       fImg.style.marginRight = "8px";

    //       const span = document.createElement("span");
    //       span.textContent = feature;

    //       li.appendChild(fImg);
    //       li.appendChild(span);
    //       ul.appendChild(li);
    //     });
    //     card.appendChild(ul);

    //     // Price
    //     const priceDiv = document.createElement("div");
    //     const price = document.createElement("p");
    //     price.className = "plan-price";
    //     price.textContent = plan.price;
    //     priceDiv.appendChild(price);
    //     card.appendChild(priceDiv);

    //     container.appendChild(card);
    //   });

    //   plansSection.appendChild(container);
    // }

    // footerLinks
    if (data.footerLinks) {
      const footerContainer = document.getElementById("footer-links");

      data.footerLinks.forEach((section) => {
        const div = document.createElement("div");

        const h4 = document.createElement("h4");
        h4.textContent = section.title;
        div.appendChild(h4);

        const ul = document.createElement("ul");
        section.items.forEach((item) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = "#";
          a.textContent = item;
          li.appendChild(a);
          ul.appendChild(li);
        });

        div.appendChild(ul);
        footerContainer.appendChild(div);
      });
    }
  });
// .catch((error) => console.error("Error:", error));
