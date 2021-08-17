import { config, startBot } from "./deps.ts";

function main() {
  config({ export: true });

  const token = Deno.env.get("DISCORD_TOKEN");
  if (token === undefined) throw new Error("discord token is not defined");

  startBot({
    token,
    intents: ["Guilds", "GuildMessages"],
    eventHandlers: {
      ready() {
        console.log("Successfully connected to gateway");
      },
      async messageCreate(message) {
        if (message.content === "!ping") {
          await message.reply("pong!");
        }
      },
    },
  });
}

main();
