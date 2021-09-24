using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Cosmos;
using Microsoft.Extensions.Configuration;
using PicSell.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PicSell.Services
{
    public interface ICosmoService
    {
        Task<string> AddPicSell(PSell psell);
    }
    public class CosmoService : ICosmoService
    {
        private CosmosClient cosmosClient;
        private Container container;

        private string databaseId = "PicSellDB";
        private string containerId = "PicSellData";

        public CosmoService([FromServices] IConfiguration config)
        {
            var endpoint = config["PicSellDB:EndpointUri"];
            var key = config["PicSellDB:PrimaryKey"];
            cosmosClient = new CosmosClient(endpoint, key);
            container = cosmosClient.GetContainer(databaseId, containerId);
        }

        public async Task<string> AddPicSell(PSell psell)
        {
            ItemResponse<PSell> response = await container.CreateItemAsync<PSell>(psell, new PartitionKey(psell.p_id));
            return response.StatusCode.ToString();
        }
    }
}
